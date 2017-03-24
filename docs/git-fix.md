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
  alias berdbm='bundle exec rake db:migrate'
  alias berdbr='bundle exec rake db:reset'
  alias berdbrb='bundle exec rake db:rollback'
  alias berdbs='bundle exec rake db:setup'
  alias berdbsd='bundle exec rake db:seed'
  alias bi='bundle install'
  alias gaa='git add -A .'
  alias gb='git branch'
  alias gc='git clone'
  alias gco='git checkout'
  alias gl='git log'
  alias gcm='git commit -m'
  alias gp='git push'
  alias gpf='git push -f'
  alias gpr='git pull --rebase'
  alias gs='git status'
  alias hdbr="heroku pg:reset DATABASE_URL"
  alias hberdbc="heroku run bundle exec rake db:create"
  alias hberdbm="heroku run bundle exec rake db:migrate"
  alias hberdbrb="heroku run bundle exec rake db:rollback"
  alias hberdbsd="heroku run bundle exec rake db:seed"
  alias hbedbhr="heroku pg:reset DATABASE --confirm nightstock; heroku run bundle exec rake db:migrate; heroku run bundle exec rake db:seed"
  alias hgaa="git add ."
  alias hgc="heroku git:clone -a"
  alias hgcm="git commit -am"
  alias hgp="git push heroku master"
  alias hl='heroku login'
  alias ho="heroku open"
  alias npmi='npm install'
  alias r='rails'
  alias rc='rails c'
  alias rg='rails generate'
  alias rgc='rails generate controller'
  alias rgm='rails generate model'
  alias rs='rails s'
  alias r='rspec'
  alias wbw='webpack -w'
  alias gac='git filter-branch -f --env-filter "GIT_AUTHOR_NAME='AkashSkySingh'; GIT_AUTHOR_EMAIL='AkashpreetSingh91@gmail.com'; GIT_COMMITTER_NAME='AkashSkySingh'; GIT_COMMITTER_EMAIL='AkashpreetSingh91@gmail.com';" HEAD'
