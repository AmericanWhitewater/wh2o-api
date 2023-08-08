# Description: Makefile for the project
setup_mac: install_homebrew install_nvm nvm_lts install_brew_deps install_npm_deps copy_env install_serverless_framework

install_homebrew:
	@which brew || /bin/bash -c "$$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

install_nvm:
	@which nvm || brew install nvm

nvm_lts: install_homebrew install_nvm
	@source $(HOME)/.nvm/nvm.sh && \
	nvm install --lts && \
	nvm use --lts && \
	nvm alias default node

install_serverless_framework:
	@which serverless || npm install -g serverless

install_openapi_generator: install_homebrew
	@which openapi-generator || brew install openapi-generator

install_brew_deps: install_act install_openapi_generator

install_act: install_homebrew
	@which act || brew install act

install_npm_deps:
	@npm ci

# Database

database_migrations:
	npx prisma migrate dev --name init

database_seed:
	npx prisma db seed

# Test Github Actions locally
action_build: install_act
	act -j build

# dev

copy_env:
	cp .env.example .env

setup_dev: install_npm_deps database_migrations database_seed

docker_dev:
	docker-compose up db -d

invoke_local_reach_state: build
	serverless invoke local --function main -p data.json

pre_build:
	rm -rf dist

build: pre_build
	npm run build

# Generate SDKs for the iOS, Android, and Web clients.
# See all available generators here: https://openapi-generator.tech/docs/generators
generate_sdks:
	openapi-generator generate -g kotlin -i ./src/openapi/wh2o-api.yaml -o ./sdks/kotlin && \
	openapi-generator generate -g typescript-axios -i ./src/openapi/wh2o-api.yaml -o ./sdks/typescript-axios && \
	openapi-generator generate -g php -i ./src/openapi/wh2o-api.yaml -o ./sdks/php && \
	openapi-generator generate -g swift5 -i ./src/openapi/wh2o-api.yaml -o ./sdks/swift --additional-properties library=Alamofire,nonPublicApi=true,responseAs=AsyncAwait,projectName=AmericanWhitewater
