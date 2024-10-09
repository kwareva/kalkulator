app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, GET, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.options('*', (req,res,next)=>{
    res.set("Allow","*")
    res.end()
})

// Add other routes before defining the route for OPTIONS hook.
app.route("/your-endpoint")
      .options(options)
      .post(post);
