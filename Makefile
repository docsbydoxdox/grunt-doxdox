BIN=node_modules/.bin

test:
	make lint

lint:
	$(BIN)/eslint tasks/doxdox.js
