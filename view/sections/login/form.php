<div class="login login-v1">
    <div class="login-container">
        <!-- Header -->
        <div class="login-header">
            <div class="brand">
                <span class="logo"></span> <b>Connexion</b>
                <small>Bienvenue sur Gorgoorlu</small>
            </div>
            <div class="icon">
                <i class="fa fa-lock"></i>
            </div>
        </div>
        
        <!-- Form -->
        <div class="login-body">
            <div class="login-content">
                <form action="userMainController" id="loginForm" method="post" class="margin-bottom-0">
                    <!-- Email -->
                    <div class="form-group m-b-20">
                        <input type="email" id="email" name="email" class="form-control form-control-lg inverse-mode" placeholder="Adresse mail :" required />
                        <p class="error-message"></p>
                    </div>

                    <!-- Password -->
                    <div class="form-group m-b-20">
                        <input type="password" id="password" name="password" class="form-control form-control-lg inverse-mode" placeholder="Mot de passe :" required />
                        <p class="error-message"></p>
                    </div>

                    <!-- Remember me -->
                    <div class="checkbox checkbox-css m-b-20">
                        <input type="checkbox" id="remember_checkbox" name="remember" /> 
                        <label for="remember_checkbox">Se souvenir de moi</label>
                    </div>

                    <!-- bouton connecter -->
                    <div class="login-buttons">
                        <button type="submit" id="btnSubmit" name="frmLogin" class="btn btn-success btn-block btn-lg">Connexion</button>
                    </div>

                    <!-- NOUVEAU : Lien vers inscription -->
                    <div class="m-t-20 text-center">
                        Pas encore de compte ? <a href="inscription.php" class="text-success">S'inscrire ici</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>