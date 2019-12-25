
const createPlanetDiagramRight = (diameter, color) => {
  const planetDiagramRight = document.createElement('div');
  planetDiagramRight.style.position = 'absolute';
  planetDiagramRight.style.width = '50%';
  planetDiagramRight.style.height = '100%';
  planetDiagramRight.style.backgroundColor = color;
  planetDiagramRight.style.rotate = '90deg';
  planetDiagramRight.style.borderBottomRightRadius = `${diameter / 2}px`;
  planetDiagramRight.style.borderTopRightRadius = `${diameter / 2}px`;
  planetDiagramRight.style.right = '0';
  planetDiagramRight.style.top = '0';
  planetDiagramRight.style.zIndex = '0';
  planetDiagramRight.id = 'planet-diagram-right';

  document.getElementById('planet-diagram-container').appendChild(planetDiagramRight);
}

const createPlanetDiagramLeft = (diameter, color) => {
  const planetDiagramLeft = document.createElement('div');
  planetDiagramLeft.style.position = 'absolute';
  planetDiagramLeft.style.width = `${diameter / 2}px`;
  planetDiagramLeft.style.height = '100%';
  planetDiagramLeft.style.backgroundColor = color;
  planetDiagramLeft.style.rotate = '90deg';
  planetDiagramLeft.style.borderRadius = '100% / 50%';
  planetDiagramLeft.style.borderTopRightRadius = '0';
  planetDiagramLeft.style.borderBottomRightRadius = '0';
  planetDiagramLeft.style.right = '50%';
  planetDiagramLeft.style.zIndex = '0';
  planetDiagramLeft.id = 'planet-diagram-left';

  document.getElementById('planet-diagram-container').appendChild(planetDiagramLeft);
}

const createPlanetDiagramLeftInside = (diameter, color) => {
  const planetDiagramLeftInside = document.createElement('div');
  planetDiagramLeftInside.style.position = 'absolute';
  planetDiagramLeftInside.style.width = `${diameter / 3.124}px`;
  planetDiagramLeftInside.style.height = '100%';
  planetDiagramLeftInside.style.backgroundColor = color;
  planetDiagramLeftInside.style.rotate = '90deg';
  planetDiagramLeftInside.style.borderRadius = '100% / 50%';
  planetDiagramLeftInside.style.borderTopRightRadius = '0';
  planetDiagramLeftInside.style.borderBottomRightRadius = '0';
  planetDiagramLeftInside.style.right = '50%';
  planetDiagramLeftInside.style.zIndex = '1';
  planetDiagramLeftInside.style.filter = 'grayscale(60%)';
  planetDiagramLeftInside.id = 'planet-diagram-left-inside';

  document.getElementById('planet-diagram-container').appendChild(planetDiagramLeftInside);
}

const createPlanetDiagramContainer = (diameter, parent, leftColor, leftInsideColor, rightColor) => {
  const planetDiagramContainer = document.createElement('div')
  planetDiagramContainer.style.width = `${diameter}px`;
  planetDiagramContainer.style.height = `${diameter}px`;
  planetDiagramContainer.style.position = 'relative';
  planetDiagramContainer.id = 'planet-diagram-container';

  parent.appendChild(planetDiagramContainer);

  createPlanetDiagramRight(500, rightColor);

  createPlanetDiagramLeft(500, leftColor);

  createPlanetDiagramLeftInside(500, leftInsideColor);
}

const createDiscDescriptionContainer = (parent) => {
  const discDescriptionContainer = document.createElement('div');

  discDescriptionContainer.id = 'planet-diagram-description';

  parent.appendChild(discDescriptionContainer);
}

const createDisc = (diameter, discDiameter, color, id, dotDiameter, text) => {
  const disc = document.createElement('div');
  const discMirror = document.createElement('div');
  const discDescriptionDot = document.createElement('div');
  const discDescriptionText = document.createElement('p');
  const discDescriptionBlock = document.createElement('div');

  disc.style.position = 'absolute';
  disc.style.width = `${(diameter / 2) * discDiameter}px`;
  disc.style.height = `${100 * discDiameter}%`;
  disc.style.backgroundColor = color;
  disc.style.rotate = '90deg';
  disc.style.borderBottomRightRadius = `${(diameter / 2) * discDiameter}px`;
  disc.style.borderTopRightRadius = `${(diameter / 2) * discDiameter}px`;
  discMirror.style.right = '50%';
  disc.style.left = '50%';
  disc.style.top = `${(diameter - (diameter * discDiameter)) / 2}px`;
  disc.style.zIndex = `${(10 / discDiameter).toFixed()}`;
  disc.id = `planet-diagram-disc-right-${id}`;
  disc.style.filter = 'opacity(80%)';

  discMirror.style.position = 'absolute';
  discMirror.style.width = `${(diameter / 3.125) * discDiameter}px`;
  discMirror.style.height = `${100 * discDiameter}%`;
  discMirror.style.backgroundColor = color;
  discMirror.style.rotate = '90deg';
  discMirror.style.borderRadius = '100% / 50%';
  discMirror.style.borderTopRightRadius = '0';
  discMirror.style.borderBottomRightRadius = '0';
  discMirror.style.top = `${(diameter - (diameter * discDiameter)) / 2}px`;
  discMirror.style.zIndex = `${(10 / discDiameter).toFixed()}`;
  discMirror.id = `planet-diagram-disc-mirror-${id}`;

  discDescriptionDot.style.width = `${dotDiameter}px`;
  discDescriptionDot.style.height = `${dotDiameter}px`;
  discDescriptionDot.style.backgroundColor = color;
  discDescriptionDot.id = `planet-diagram-disc-dot-${id}`;

  discDescriptionText.innerHTML = text;
  discDescriptionText.id = `planet-diagram-disc-text-${id}`;

  discDescriptionBlock.id = `planet-diagram-disc-block-${id}`;

  document.getElementById('planet-diagram-description').appendChild(discDescriptionBlock);
  document.getElementById(`planet-diagram-disc-block-${id}`).appendChild(discDescriptionDot);
  document.getElementById(`planet-diagram-disc-block-${id}`).appendChild(discDescriptionText);
  document.getElementById('planet-diagram-container').appendChild(disc);
  document.getElementById('planet-diagram-container').appendChild(discMirror);
}

// const parent = document.getElementsByTagName('body')[0];

// const diameter = 500;

// createPlanetDiagramContainer(diameter, parent, '#dab4b4', '#e9e1e1', '#b3acac');

// createDiscDescriptionContainer(parent);

// createDisc(diameter, 0.8, '#411fbd', 1, 20, 'text');

// createDisc(diameter, 0.75, '#1eb2c5', 2, 20, 'text');

// createDisc(diameter, 0.68, 'red', 3, 20, 'text');

// createDisc(diameter, 0.5, 'green', 4, 20, 'text');

// createDisc(diameter, 0.4, 'blue', 5, 20, 'text');

// createDisc(diameter, 0.15, 'yellow', 6, 20, 'text');





