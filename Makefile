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

install_brew_deps: install_act

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
