# Frontend Code
    
    function handleDelete() {
    console.log("idNum : " + customerp._id)
    axios
    .delete('http://localhost:5000/customers/delete', {
    data: {
    id: customerp._id,
    }
    }
    )
    .then(res => {
    console.log(res);
    console.log(res.data);
    })
    .catch(err => {
    console.log(err);
    });
    
            axios
                .post('http://localhost:5000/customers/cre', {
                    msg: "Your account has been rejected",
                    msg2: "Your account has been approved",
                    email :customerp.email+"c",
                    status: customerp.status,
                    idNumber : customerp.idNumber+"43",
                    nic : customerp.nic+"3",
                    name : customerp.name,
                    fullname : customerp.fullname,
                    password : customerp.password,
                    address: customerp.address,
                    contactNo: customerp.contactNo,
                    updatedQRAt: customerp.updatedQRAt,
                    notification: customerp.notification,
                    positive: customerp.positive,
                    timestamp: customerp.timestamp,
                    notificationRead: customerp.notificationRead,
                })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }

# BackendCode

    // @route POST api/customers
    // @description Create customer
    // @access Public
    router.post("/cre", (req, res) => {
    console.log(req.body.email);
    Customer.findOne({ email: req.body.email }).then((customer) => {
    if (customer) {
    return res.status(400).json("Email already exists");
    } else {
    const newCustomer = new Customer({
    name: req.body.name,
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
    status: req.body.status,
    nic: 23232,
    idNumber: 23232,
    address: req.body.address,
    contactNo: req.body.contactNo,
    updatedQRAt: req.body.updatedQRAt,
    notification: req.body.notification,
    positive: req.body.positive,
    timestamp: req.body.timestamp,
    notificationRead: req.body.notificationRead,
    });
    
          newCustomer.save().then((customer) => res.json(customer));
        }
    });
    });


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
