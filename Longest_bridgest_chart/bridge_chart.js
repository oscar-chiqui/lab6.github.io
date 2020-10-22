//<!-- Oscar Chiqui | 2560-60 Web server |  array of objects to hold longest bridges & their data //

let bridges = [
    {"name": "Verrazano-Narrows Bridge", "city": "New York", "state": "NY", "span": 1298.4, "location": [40.6066, -74.0447]},
    {"name":"Golden Gate Bridge","city":"San Francisco and Marin","state":"CA","span":1280.2, "location":[37.8199,-122.4783]},
    {"name":"Mackinac Bridge","city":"Mackinaw and St Ignance","state":"MI","span":1158.0, "location":[45.8174,-84.7278]},
    {"name":"George Washington Bridge","city":"New York","state":"NY","span":1067.0, "location":[40.8517,-73.9527]},
    {"name":"Tacoma Narrows Bridge","city":"Tacoma and Kitsap","state":"WA","span":853.44, "location":[47.2690, -122.5517]},
]

let bridgeNames = []
let bridgeSpans = []

bridges.forEach(function (bridge){
    bridgeNames.push(bridge.name)
    bridgeSpans.push(bridge.span)
})

// The label and the colors for the chart are set and displayed. //

    let canvas = document.querySelector('#bridge-chart')
    let ctx = canvas.getContext('2d')
    let chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: bridgeNames,
            datasets: [ {
                label: 'Span of Bridges',
                data: bridgeSpans,
                backgroundColor:['red', 'green', 'blue', 'yellow','orange']
            } ]
        },
        options: {
            scales: {
                yAxes: [ {
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    })
