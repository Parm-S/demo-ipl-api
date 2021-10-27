import {app} from "./app";

const port = process.env.PORT || 5000;
//server listening on the port 
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

