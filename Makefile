install:
	yarn install --frozen-lockfile

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js

lint:
	npx eslint --fix