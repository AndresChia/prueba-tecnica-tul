import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export default class RoleGuard implements CanActivate {
  canActivate() {
    return true;
  }
}
