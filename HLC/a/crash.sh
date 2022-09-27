#!/bin/bash
for (( i = 0; i < 100000000000000000; i++ )); do
	./crash.sh
done
