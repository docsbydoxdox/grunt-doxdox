BIN=node_modules/.bin

test:
	make lint

lint:
	$(BIN)/eslint tests/doxdox.js
