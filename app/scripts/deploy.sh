#!/usr/bin/env bash
# Abort on errors
set -e

# Check if files in root
cd ../

# Exit if the directory isn't found.
if (($?>0)); then
    echo "Can't find work dir... exiting"
    exit
fi

for i in *; do
    if ! grep -qxFe "$i" ./app/scripts/keeplist.txt; then
        echo "Deleting: $i"
        # the next line is commented out.  Test it.  Then uncomment to removed the files
        rm -rf "$i"
    fi
done

#CHeck for Dist Folder and its contents
if [ -d "./dist/" ];  then
	if [ -z "$(ls -A ./dist/)" ]; then
		echo "Dist folder is empty, skipping ..."
	else
		echo "Moving files for deploy ..."
		mv ./dist/* ./
		echo "Removing Dist Folder ..."
		rm -rf ./dist/
	fi
else
	echo "Dist folder doesn't exist, skipping ..."
fi



