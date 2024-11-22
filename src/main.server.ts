import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { AppTestComponent } from './app/app-test/app-test.component';

const bootstrap = () => bootstrapApplication(AppTestComponent, config);

export default bootstrap;
