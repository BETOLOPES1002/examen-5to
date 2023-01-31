import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import "node_modules/jquery/dist/jquery.min.js";
import "node_modules/@popperjs/core/dist/umd/popper.min.js";
import "node_modules/bootstrap/dist/js/bootstrap.min.js";
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
