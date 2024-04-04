#!/bin/bash

# This script transposes the content of a file specified with the -f flag

# Check if at least 2 arguments are passed (-f and a filename)
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 -f filename"
    exit 1
fi

# Process command line options
while getopts ":f:" opt; do
  case ${opt} in
    f )
      filename=$OPTARG
      ;;
    \? )
      echo "Invalid option: $OPTARG" 1>&2
      exit 1
      ;;
    : )
      echo "Invalid option: $OPTARG requires an argument" 1>&2
      exit 1
      ;;
  esac
done
shift $((OPTIND -1))

# Check if the file exists
if [ ! -f "$filename" ]; then
    echo "Error: File does not exist."
    exit 1
fi

# Transpose the file
awk '
{
    for (i=1; i<=NF; i++) {
        if(NR==1) {
            transposed[i] = $i;
        } else {
            transposed[i] = transposed[i] " " $i;
        }
    }
}
END {
    for (i=1; i<=NF; i++) {
        print transposed[i];
    }
}' "$filename"
