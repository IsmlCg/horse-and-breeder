<template>
  <!-- register Form -->
  <div class="overflow-hidden">
    <div class="container content-space-1 content-space-lg-1">
      <div class="row">
        <div class="col-lg-3 mb-0 mb-lg-0"></div>
        <div class="col-lg-6 mb-10 mb-lg-0">
          <form className="js-validate needs-validation">
            <div className="text-center">
              <div className="mb-5">
                <h3 className="card-title">Welcome to horse and breeder</h3>
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label" htmlFor="signinSrEmail">
                Your email
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                id="signinSrEmail"
                tabIndex="1"
                placeholder="email@address.com"
                aria-label="email@address.com"
                value=""
                required
              />
              <span className="invalid-feedback">
                Please enter a valid email address.
              </span>
            </div>

            <div className="mb-4">
              <label
                className="form-label"
                htmlFor="signupSrPassword"
                tabIndex="0"
              >
                Password
              </label>

              <div className="input-group-merge">
                <input
                  type="password"
                  className="js-toggle-password form-control form-control-lg"
                  name="password"
                  id="signupSrPassword"
                  placeholder="8+ characters required"
                  aria-label="8+ characters required"
                  required
                  minLength="8"
                  value=""
                />
              </div>
            </div>

            <div className="d-flex justify-content-end mb-4">
              <a className="form-label-link" href=""> Forgot Password? </a>
            </div>

            <div className="d-grid gap-4">
              <button type="submit" className="btn btn-primary btn-lg">
                Sign in
              </button>
              <p className="card-text text-muted">
                Don't have an account yet?{" "}
                <a className="link" href=""> Sign up here </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SignIn",
};
</script>