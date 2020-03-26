# I am hosting my site via github pages
![test](https://github.com/vujita/vubnguyen/workflows/test/badge.svg?branch=master)

This lets me do a few things

- It will be viewable on my personal [domain](http://vubnguyen.com), a gh-page


## Setup
-----------
Prequisites:

[nvm](https://github.com/nvm-sh/nvm)
### Install & Update Script

To **install** or **update** nvm, you should run the [install script][2]. To do that, you may either download and run the script manually, or use the following cURL or Wget command:
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

Running either of the above commands downloads a script and runs it. The script clones the nvm repository to `~/.nvm`, and attempts to add the source lines from the snippet below to the correct profile file (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`).

<a id="profile_snippet"></a>
```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
------------------

[node](https://nodejs.org/en/) version `12.7.0`

```
nvm install

npm i
```