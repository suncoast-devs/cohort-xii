dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.2/publish

docker build -t sdg-autotrader-image ./bin/release/netcoreapp2.2/publish

docker tag sdg-autotrader-image registry.heroku.com/sdg-autotrader/web

docker push registry.heroku.com/sdg-autotrader/web

heroku container:release web -a sdg-autotrader

# sudo chmod 755 deploy.sh
# ./deploy.sh