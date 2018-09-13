#!/bin/bash

echo "Enter the KMS key for the current user:"
read varname

for file in `ls -l`
do
    if test -f $file
    then
        echo "File '$file' found"

        if file "$file" |grep -qE 'image|bitmap'; then
            echo "File '$file' has the headers of an image"

            fullName=${file##*/}
            fileName=${fullName%%.*}
            ext=${file#*.}

            dirName="encrypted_$fileName"
            mkdir $dirName

            dek=`cn-cli encrypt $fullName "$dirName/$fullName.enc" $varname`
            sha1=`shasum $file`

            echo "$fullName.enc"
            echo $dek
            echo $sha1

            echo $dek > "$dirName/$fileName.dek"
            echo $sha1 > "$dirName/$fileName.sha1"
        fi
    fi
done

echo "Script Complete: [Enter]"
read
