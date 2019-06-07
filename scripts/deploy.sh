#!/usr/bin/env bash
# Abort on errors
set -e

# Check if files in root

# Exit if the directory isn't found.
if (($?>0)); then
    echo "Can't find work dir... exiting"
    exit
fi

# Format keeplist for reading
echo "Formating Keep list ..."
sed -i 's/[[:space:]]*$//' ./scripts/keeplist.txt 
for i in *; do
    if ! grep -qxFe "$i" ./scripts/keeplist.txt; then
        echo "Updating or deleteng: $i"
        # the next line is commented out.  Test it.  Then uncomment to removed the files
        rm -rf "$i"
    fi
done

#Check for Dist Folder and its contents
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



