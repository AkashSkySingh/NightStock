Run this command in the Terminal from within your repo's root directory,
  *being sure to put your information in place of the placeholders*

  ```bash
  git filter-branch -f --env-filter "GIT_AUTHOR_NAME='AkashSkySingh'; GIT_AUTHOR_EMAIL='AkashpreetSingh91@gmail.com'; GIT_COMMITTER_NAME='AkashSkySingh'; GIT_COMMITTER_EMAIL='AkashpreetSingh91@gmail.com';" HEAD
  ```

  aliases:
  eval "$(rbenv init -)" <!-- dont include this line -->
  alias ..='cd ..'
  alias c='cd '
  alias a.='atom .'
  alias a='atom'
  alias abrc="atom ~/.bashrc"
  alias be='bundle exec'
  alias ber='bundle exec rspec'
  alias berr='bundle exec rake routes'
  alias berdbc='bundle exec rake db:create'
  alias berdbr='bundle exec rake db:reset'
  alias berdbs='bundle exec rake db:setup'
  alias berdbsd='bundle exec rake db:seed'
  alias bi='bundle install'
  alias gaa='git add -A .'
  alias gb='git branch'
  alias gco='git checkout'
  alias gl='git log'
  alias gcm='git commit -m'
  alias gp='git push'
  alias gpf='git push -f'
  alias gpr='git pull --rebase'
  alias gs='git status'
  alias r='rails'
  alias rc='rails c'
  alias rg='rails generate'
  alias rgc='rails generate controller'
  alias rgm='rails generate model'
  alias rs='rails s'
  alias r='rspec'
  alias wbw='webpack -w'
  alias gac='git filter-branch -f --env-filter "GIT_AUTHOR_NAME='AkashSkySingh'; GIT_AUTHOR_EMAIL='AkashpreetSingh91@gmail.com'; GIT_COMMITTER_NAME='AkashSkySingh'; GIT_COMMITTER_EMAIL='AkashpreetSingh91@gmail.com';" HEAD'
