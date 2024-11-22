import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppTestComponent } from './app/app-test/app-test.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


bootstrapApplication(AppTestComponent, appConfig)
  .catch((err) => console.error(err));

