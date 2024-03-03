import { cleanupMapboxLayerJson } from '../utils/cleanupMapboxLayerJson'

export const layers1to100 = [
  cleanupMapboxLayerJson('index_casing', [
    {
      layout: {
        'line-cap': 'round',
        'line-sort-key': [
          'case',
          ['match', ['get', 'proc_mandatory'], ['use_sidepath', 'optional_sidepath'], true, false],
          0,
          [
            'match',
            ['get', 'way_type'],
            ['bicycle road', 'shared bus lane', 'shared traffic lane', 'shared road'],
            true,
            false,
          ],
          2,
          1,
        ],
      },
      type: 'line',
      source: 'composite',
      id: 'index_casing',
      paint: {
        'line-width': ['interpolate', ['linear'], ['zoom'], 0, 1.4, 10, 1.4, 22, 16],
        'line-offset': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0,
          ['match', ['get', 'side'], ['right'], 1, ['left'], -1, 0],
          10,
          ['match', ['get', 'side'], ['right'], 1, ['left'], -1, 0],
          22,
          ['match', ['get', 'side'], ['right'], 12, ['left'], -12, 0],
        ],
        'line-color': [
          'match',
          ['get', 'way_type'],
          [
            'shared path',
            'crossing',
            'shared footway',
            'cycle lane (protected)',
            'cycle track',
            'segregated path',
            'link',
            'cycle path',
            'track or service',
          ],
          'rgb(125, 125, 125)',
          'rgb(0, 0, 0)',
        ],
      },
      'source-layer': 'cycling_quality_index_epsg432-4roq5v',
    },
  ]),
  cleanupMapboxLayerJson('index_gap_background', [
    {
      layout: {
        'line-cap': 'round',
      },
      type: 'line',
      source: 'composite',
      id: 'index_gap_background',
      paint: {
        'line-color': [
          'step',
          ['get', 'index'],
          '#9b0909',
          10,
          '#c83911',
          20,
          '#e9671b',
          30,
          '#f89229',
          40,
          '#f9ba34',
          50,
          '#f3e330',
          60,
          '#87e6aa',
          70,
          '#24d2d0',
          80,
          '#3199ed',
          90,
          'rgb(28, 59, 180)',
        ],
        'line-width': ['interpolate', ['linear'], ['zoom'], 0, 1, 10, 1, 22, 12],
        'line-offset': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0,
          ['match', ['get', 'side'], ['right'], 1, ['left'], -1, 0],
          10,
          ['match', ['get', 'side'], ['right'], 1, ['left'], -1, 0],
          22,
          ['match', ['get', 'side'], ['right'], 12, ['left'], -12, 0],
        ],
      },
      'source-layer': 'cycling_quality_index_epsg432-4roq5v',
    },
  ]),
  cleanupMapboxLayerJson('index_main_colour', [
    {
      layout: {
        'line-sort-key': [
          'step',
          ['get', 'index'],
          3,
          10,
          10,
          20,
          20,
          30,
          30,
          40,
          40,
          50,
          50,
          60,
          60,
          70,
          70,
          80,
          80,
          90,
          90,
        ],
      },
      type: 'line',
      source: 'composite',
      id: 'index_main_colour',
      paint: {
        'line-color': [
          'step',
          ['get', 'index'],
          '#9b0909',
          10,
          '#c83911',
          20,
          '#e9671b',
          30,
          '#f89229',
          40,
          '#f9ba34',
          50,
          '#f3e330',
          60,
          '#87e6aa',
          70,
          '#24d2d0',
          80,
          '#3199ed',
          90,
          'rgb(28, 59, 180)',
        ],
        'line-width': ['interpolate', ['linear'], ['zoom'], 0, 1, 10, 1, 22, 12],
        'line-offset': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0,
          ['match', ['get', 'side'], ['right'], 1, ['left'], -1, 0],
          10,
          ['match', ['get', 'side'], ['right'], 1, ['left'], -1, 0],
          22,
          ['match', ['get', 'side'], ['right'], 12, ['left'], -12, 0],
        ],
      },
      'source-layer': 'cycling_quality_index_epsg432-4roq5v',
    },
  ]),
  cleanupMapboxLayerJson('lane markings solid', [
    {
      layout: {
        'line-sort-key': [
          'step',
          ['get', 'index'],
          3,
          10,
          10,
          20,
          20,
          30,
          30,
          40,
          40,
          50,
          50,
          60,
          60,
          70,
          70,
          80,
          80,
          90,
          90,
        ],
      },
      type: 'line',
      source: 'composite',
      id: 'lane markings solid',
      paint: {
        'line-width': ['interpolate', ['linear'], ['zoom'], 0, 0.15, 10, 0.15, 22, 1.8],
        'line-color': 'rgb(255, 255, 255)',
        'line-offset': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0,
          ['match', ['get', 'side'], ['right'], 0.6, ['left'], -0.6, 0],
          10,
          ['match', ['get', 'side'], ['right'], 0.6, ['left'], -0.6, 0],
          22,
          ['match', ['get', 'side'], ['right'], 8, ['left'], -8, 0],
        ],
      },
      'source-layer': 'cycling_quality_index_epsg432-4roq5v',
      filter: [
        'all',
        ['match', ['get', 'side'], ['left', 'right'], true, false],
        ['match', ['get', 'way_type'], ['cycle lane (exclusive)'], true, false],
      ],
    },
  ]),
  cleanupMapboxLayerJson('lane markings dashed', [
    {
      layout: {
        'line-sort-key': [
          'step',
          ['get', 'index'],
          3,
          10,
          10,
          20,
          20,
          30,
          30,
          40,
          40,
          50,
          50,
          60,
          60,
          70,
          70,
          80,
          80,
          90,
          90,
        ],
      },
      type: 'line',
      source: 'composite',
      id: 'lane markings dashed',
      paint: {
        'line-width': ['interpolate', ['linear'], ['zoom'], 0, 0.15, 10, 0.15, 22, 1.8],
        'line-color': 'rgb(255, 255, 255)',
        'line-offset': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0,
          ['match', ['get', 'side'], ['right'], 0.6, ['left'], -0.6, 0],
          10,
          ['match', ['get', 'side'], ['right'], 0.6, ['left'], -0.6, 0],
          22,
          ['match', ['get', 'side'], ['right'], 8, ['left'], -8, 0],
        ],
        'line-dasharray': [3, 3],
      },
      'source-layer': 'cycling_quality_index_epsg432-4roq5v',
      filter: [
        'all',
        ['match', ['get', 'side'], ['left', 'right'], true, false],
        [
          'match',
          ['get', 'way_type'],
          ['cycle lane (advisory)', 'cycle lane (central)', 'shared bus lane', 'crossing'],
          true,
          false,
        ],
      ],
    },
  ]),
  cleanupMapboxLayerJson('track markings', [
    {
      layout: {
        'line-sort-key': [
          'step',
          ['get', 'index'],
          3,
          10,
          10,
          20,
          20,
          30,
          30,
          40,
          40,
          50,
          50,
          60,
          60,
          70,
          70,
          80,
          80,
          90,
          90,
        ],
      },
      type: 'line',
      source: 'composite',
      id: 'track markings',
      paint: {
        'line-width': ['interpolate', ['linear'], ['zoom'], 0, 0.2, 10, 0.2, 22, 2],
        'line-color': 'rgb(150, 150, 150)',
        'line-offset': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0,
          ['match', ['get', 'side'], ['right'], 0.6, ['left'], -0.6, 0],
          10,
          ['match', ['get', 'side'], ['right'], 0.6, ['left'], -0.6, 0],
          22,
          ['match', ['get', 'side'], ['right'], 8, ['left'], -8, 0],
        ],
      },
      'source-layer': 'cycling_quality_index_epsg432-4roq5v',
      filter: [
        'all',
        ['match', ['get', 'side'], ['left', 'right'], true, false],
        [
          'match',
          ['get', 'way_type'],
          ['shared path', 'shared footway', 'cycle track', 'segregated path', 'cycle path'],
          true,
          false,
        ],
      ],
    },
  ]),
]

export const legend1to100 = [
  { color: '#9b0909', label: 'Einstufung 10 – am Schlechtesten', filterConfig: null },
  { color: '#c83911', label: 'Einstufung 20', filterConfig: null },
  { color: '#e9671b', label: 'Einstufung 30', filterConfig: null },
  { color: '#f89229', label: 'Einstufung 40', filterConfig: null },
  { color: '#f9ba34', label: 'Einstufung 50', filterConfig: null },
  { color: '#f3e330', label: 'Einstufung 60', filterConfig: null },
  { color: '#87e6aa', label: 'Einstufung 70', filterConfig: null },
  { color: '#24d2d0', label: 'Einstufung 80', filterConfig: null },
  { color: '#3199ed', label: 'Einstufung 90', filterConfig: null },
  { color: 'rgb(28, 59, 180)', label: 'Einstufung 100 – am Besten', filterConfig: null },
]