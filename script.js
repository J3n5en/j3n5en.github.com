document.addEventListener('DOMContentLoaded', function() {

    particlesJS('canvas', {
        'particles': {
            'number': {
                'value': 100,
                'density': {
                    'enable': true,
                    'value_area': 700
                }
            },
            'color': {
                'value': '#abab81'
            },
            'shape': {
                'type': 'circle'
            },
            'opacity': {
                'value': 0.5,
                'random': true
            },
            'size': {
                'value': 3,
                'random': true
            },
            'line_linked': {
                'enable': true,
                'distance': 130,
                'color': '#4f5b60',
                'opacity': 0.4,
                'width': 1
            },
            'move': {
                'enable': true,
                'speed': 1,
                'direction': 'none',
                'random': true,
                'straight': false,
                'out_mode': 'bounce',
                'bounce': false
            }
        },
        'interactivity': {
            'detect_on': 'canvas',
            'events': {
                'onhover': {
                    'enable': true,
                    'mode': 'grab'
                },
                'onclick': {
                    'enable': true,
                    'mode': 'push'
                },
                'resize': true
            },
            'modes': {
                'grab': {
                    'distance': 100,
                    'line_linked': {
                        'opacity': 1
                    }
                },
                'push': {
                    'particles_nb': 2
                }
            }
        },
        'retina_detect': true
    })

})
