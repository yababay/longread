pull:
	git pull origin articles

push: 
	git add .
	git commit -am update
	git push origin articles

all: pull sync

sync:
	git checkout gh
	git checkout articles -- src
	npm run deploy
	git checkout articles
