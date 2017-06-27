namespace :heroku do

  # bundle exec rake heroku:reset_db['my-app-name']
  desc 'Reset database with seed data'
  task :reset_db do |t|
    run_command("pg:reset DATABASE_URL --confirm nightstock")
    run_command("run rake db:migrate")
    run_command("run rake db:seed")
  end

  # Helper Functions
  # Source: http://kakimotonline.com/2014/04/27/using-rake-to-automate-heroku-tasks/
  def run_command(cmd)
    Bundler.with_clean_env do
      sh build_command(cmd)
    end
  end

  def build_command(cmd)
    "heroku #{cmd}"
  end
end
