const patioticAdminCenterStrategems: Strategem[] = [
  {
    name: 'Machine Gun',
    imgPath: '',
    category: 'Patriotic Administration Center',
    sequence: [Input.Down, Input.Left, Input.Down, Input.Up, Input.Right],
    callIntime: 3,
    uses: 0,
    cooldown: 480
  },
  {
    name: 'Anti-Material Rifle',
    imgPath: '',
    category: 'Patriotic Administration Center',
    sequence: [Input.Down, Input.Left, Input.Right, Input.Up, Input.Down],
    callIntime: 3,
    uses: 0,
    cooldown: 480
  },
  {
    name: 'Stalwart',
    imgPath: '',
    category: 'Patriotic Administration Center',
    sequence: [
      Input.Down,
      Input.Left,
      Input.Down,
      Input.Up,
      Input.Up,
      Input.Left
    ],
    callIntime: 3,
    uses: 0,
    cooldown: 480
  }
];

const strategems = [...patioticAdminCenterStrategems];

export default strategems;
