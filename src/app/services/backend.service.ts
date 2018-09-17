import { Injectable } from '@angular/core';

const idUser = "";

export class BackendService {
  

  static isLogged():boolean {
    return !!localStorage.getItem("idUser");
  }

  static get idUser(): string {
    return localStorage.getItem("idUser");
  }

  static set idUser(idUser: string) {
    localStorage.setItem("idUser", idUser);
  }

  constructor() { }
}
