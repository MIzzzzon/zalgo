FILE='bookmarklet.js'
TMP='tmp1324'

echo "javascript:" > $TMP
cat zalgo.js >> $TMP

./node_modules/.bin/uglifyjs $TMP -o bookmarklet.js

rm $TMP
