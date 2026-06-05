( function( $ ) {

	$( document ).ready( function() {

		var SCREEN_WIDTH = window.innerWidth,
            SCREEN_HEIGHT = window.innerHeight,
            aspect = SCREEN_WIDTH / SCREEN_HEIGHT,
            HALF_SCREEN_WIDTH = window.innerWidth / 2,
            HALF_SCREEN_HEIGHT = window.innerHeight / 2,
            t;

		var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
        camera.position.z = 32;
        scene.background = new THREE.Color(0x111111);

		function background_particles(size, transparent, opacity, sizeAttenuation, color, nbParticles) {
            var starsGeometry = new THREE.Geometry();
            for (var i = 0; i < nbParticles; i++) {
                var star = new THREE.Vector3();
                star.x = THREE.Math.randFloatSpread(1900);
                star.y = THREE.Math.randFloatSpread(1900);
                star.z = THREE.Math.randFloatSpread(2600) + 64;
                starsGeometry.vertices.push(star);
            }
            var starsMaterial = new THREE.PointsMaterial({
                color: color,
                size: size,
                transparent: transparent,
                opacity: opacity,
                sizeAttenuation: sizeAttenuation,
                map: createCircleTexture('#ffffff', 32)
            });
            starField = new THREE.Points(starsGeometry, starsMaterial);
            scene.add(starField);
        }

        function createCircleTexture(color, size) {
            var matCanvas = document.createElement('canvas');
            matCanvas.width = matCanvas.height = size;
            var matContext = matCanvas.getContext('2d');
            var texture = new THREE.Texture(matCanvas);
            var center = size / 2;
            matContext.beginPath();
            matContext.arc(center, center, size / 2, 0, 2 * Math.PI, false);
            matContext.closePath();
            matContext.fillStyle = color;
            matContext.fill();
            texture.needsUpdate = true;
            return texture;
        }

        function initAnimate() {
            initAnimateRQAF = window.requestAnimationFrame(initAnimate);
            if (!Modernizr.touchevents) {
                starField.rotation.x -= 0.00015;
                starField.rotation.y -= 0.00015;
                starField.rotation.x -= 0.00015;
                t += 0.0025;
            } else {
                starField.rotation.x -= 0.00015;
                starField.rotation.y -= 0.00015;
                starField.rotation.x -= 0.00015;
            }
            renderer.render(scene, camera);
        }

		if( jQuery(".sky-bg").exists() ) {
			background_particles(1, true, .7, true, new THREE.Color(0xffffff), 10000);
			if (!Modernizr.touchevents || window.devicePixelRatio > 1) {
	            renderer = new THREE.WebGLRenderer({
	                antialias: false
	            });
	        } else {
	            renderer = new THREE.WebGLRenderer({
	                antialias: true
	            });
	        }
	        renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
	        renderer.setSize(window.innerWidth, window.innerHeight);
	        renderer.domElement.classList.add('globalCanvas');
	        document.getElementsByClassName("sky-bg")[0].appendChild(renderer.domElement);
	        rect = renderer.domElement.getBoundingClientRect();
	        raycaster = new THREE.Raycaster();
	        renderer.render(scene, camera);
	        initAnimate();

	        window.addEventListener( 'resize', onWindowResize, false );

			function onWindowResize(){
			    camera.aspect = window.innerWidth / window.innerHeight;
			    camera.updateProjectionMatrix();
			    renderer.setSize( window.innerWidth, window.innerHeight );
			}
	    }

	} );

} )( jQuery );