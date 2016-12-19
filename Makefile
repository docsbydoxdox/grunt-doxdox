BIN=node_modules/.bin

test:
	make lint
	$(BIN)/grunt test
	@make clean

lint:
	$(BIN)/eslint tasks/doxdox.js
	$(BIN)/eslint test/specs/

clean:
	@rm -rf temp/ || exit 0;

.PHONY: test
