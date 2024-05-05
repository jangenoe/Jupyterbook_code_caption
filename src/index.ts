import type { FieldProps, WidgetProps } from '@rjsf/utils';
import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import {
  IFormRendererRegistry,
  IFormRenderer
} from '@jupyterlab/ui-components';

/**
 * Initialization of a simple metadata form plugin.
 */
const simple: JupyterFrontEndPlugin<void> = {
  id: 'Jupyterbook_code_caption:simple',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('Jupyterbook_code_caption metadata-form example activated');
  }
};

export default [simple];
