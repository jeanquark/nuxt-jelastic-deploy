<template>
    <div class="container">
        <div>
            <Logo />
            <h1 class="title">nuxt-jelastic-deploy</h1>
            <div class="links">
                Current time: {{ new Date() }}<br />
                Deploy time: 16:57<br /><br />
				Image local: <br /><img src="/images/1920x1080.jpg" width="100" /><br /><br />
				Image server local: <br /><img src="https://loginmycv.jcloud-ver-jpc.ik-server.com/images/1920x1080.jpg" width="100" /><br /><br />
				<!-- Image server nfs: <br /><img src="https://loginmycv.jcloud-ver-jpc.ik-server.com/uploads/1920x1080.jpg" width="100" /><br /><br />
				Image server nfs 2: <br /><img src="https://loginmycv.jcloud-ver-jpc.ik-server.com/mnt/shared/uploads/1920x1080.jpg" width="100" /><br /><br />
				Image server nfs 3: <br /><img src="/uploads/1920x1080.jpg" width="100" /><br /><br />
				Image server nfs 4: <br /><img src="https://loginmycv.jcloud-ver-jpc.ik-server.com/loginmycv/uploads/1920x1080.jpg" width="100" /><br /><br />
				Image server nfs 5: <br /><img src="/loginmycv/uploads/1920x1080.jpg" width="100" /><br /><br /> -->
				<!-- Image server nfs 6: <br /><br /><br /> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
