all: push action

pull:
	git pull origin articles

push:
	git add .
	git commit -am update
	git push origin articles

action:
	git checkout main
	git checkout articles -- src/articles
	git checkout articles -- src/routes/(echo-1917)/echo-1917/README.md
	git push origin main
	git checkout articles

sync:
	git checkout gh
	git checkout articles -- src
	npm run deploy
	git checkout articles

here: pull sync

there: push sync
