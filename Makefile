pull:
	git pull origin articles

push:
	git add .
	git commit -am update
	git push origin articles

sync:
	git checkout gh
	git checkout articles -- src
	npm run deploy
	git checkout articles

here: pull sync

there: push sync
