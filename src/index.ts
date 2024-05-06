import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization of a caption metadata form plugin.
 */
const caption: JupyterFrontEndPlugin<void> = {
  id: 'Jupyterbook_code_caption:caption',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('Jupyterbook_code_caption metadata-form example activated');
  }
};

export default [caption];
