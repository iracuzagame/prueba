import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {
  loadScript(src: string): void {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  loadScripts(scripts: string[]): void {
    scripts.forEach(src => this.loadScript(src));
  }

  executeScript(code: string): void {
    const script = document.createElement('script');
    script.text = code;
    document.body.appendChild(script);
  }

}