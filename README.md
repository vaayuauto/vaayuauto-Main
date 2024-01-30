# vaayuauto-Main

# Website: https://vaayu-auto.uc.r.appspot.com/

# Deployment Instructions:

1.Open google cloud console - After selecting project - open terminal button is available on the right side top.
2. Open App Engine > Cloud Shell Terminal
3. Clone Git Project - git clone https://github.com/vaayuauto/vaayuauto-Main.git
4. Go to Vaayuauto-Main Folder > when we do ls we need to see all the files
5. npm install
6. npm run build
7. do ls - we need to see the build file now.
8. now remove all the files except build file
9. rm package.json
10. rm package-lock.json
11. rm README.md
12. rm -r src/ rm -r public/ rm tailwind.config.js rm -r node_modules etc
13. touch app.yaml
14. vim app.yaml
15. update below lines into it
- Insert (press any key)
- -----------------------------------------------
- runtime: nodejs12
handlers:
# Serve all static files with url ending with a file extension
- url: /(.*\..+)$
  static_files: build/\1
  upload: build/(.*\..+)$
# Catch all handler to index.html
- url: /.*
  static_files: build/index.html
  upload: build/index.html
----------------------------------------------------------

15. Run command - gcloud app deploy
16. Authorize pop up will showup (Click on Authorize)
17. Asks for what services to deploy - (Give y as yes)
18. It will begin deployment
19. Now run - gcloud app browse
20. It will give us the website url.
21. ## https://vaayu-auto.uc.r.appspot.com/

# Added Youtube Reference Link

https://www.youtube.com/watch?v=pZggyJQKtlM

