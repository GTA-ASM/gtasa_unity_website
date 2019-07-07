<template>
    <footer class="container-fluid bg-bk py-5">
        <div class="row justify-content-center py-5">
            <div class="col-md-4 col-sm-12">
                <h3 class="text-center left-reveal">
                    <a class="text-white" href="https://discordapp.com/invite/p6jjud5">
                        <i class="fab fa-discord"></i>
                        {{$t('menus.footer.discord')}}
                    </a>
                </h3>
            </div>
            <div class="col-md-4 col-sm-12">
                <h3 class="text-center top-reveal">
                    <a class="text-white" href="https://github.com/GTA-ASM/SanAndreasUnity">
                        <i class="fab fa-github"></i>
                         {{$t('menus.footer.github')}}
                    </a>
                </h3>
            </div>
            <div class="col-md-4 col-sm-12">
                <h3 class="text-center right-reveal">
                    <a class="text-white" href="https://www.youtube.com/channel/UCsslP7vqD06AMh6JlEy0pkg">
                        <i class="fab fa-youtube"></i>
                         {{$t('menus.footer.youtube')}}
                    </a>
                </h3>
            </div>
            <div class="col-md-8 col-sm-12 my-5">
                <h4 class="text-center bot-reveal">Copyright GTA-ASM &copy; 2019</h4>
            </div>
        </div>
        <div class="row justify-content-center py-3 px-2">
            <div class="col-md-8 col-sm-12">
                <h5 class="text-muted text-center bot-reveal">
                     {{$t('menus.footer.legal')}}
                </h5>
            </div>
        </div>
    </footer>
</template>
