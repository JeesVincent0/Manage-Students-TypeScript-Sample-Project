const authControllers = {
    renderLoginPage: (req, res) => {
        try {
            console.log("Reached login request");
            res.render('logIn');
        }
        catch (error) {
        }
    }
};
export default authControllers;
//# sourceMappingURL=authController.js.map