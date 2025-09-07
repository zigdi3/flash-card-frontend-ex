import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, EMPTY, finalize, Observable, tap } from 'rxjs';
import { APP_CONFIG } from 'src/app/app.config';
import { CardProfile } from '@app/features/pages/card-register/model/card-profile.model';
@Injectable({
  providedIn: 'root',
})
export class CardService {
  url: string = APP_CONFIG.API_SERVER;
  private http = inject(HttpClient);
  private _cards = signal<CardProfile[] | null>(null);
  public readonly cards = this._cards.asReadonly();
  private _isLoading = signal<boolean>(false);
  public readonly isLoading = this._isLoading.asReadonly();
  private _error = signal(false);
  public readonly error = this._error.asReadonly();

  handleError = (err: HttpErrorResponse) => {
    console.log(err);
    this._error.set(true);
    return EMPTY;
  };

  list(): Observable<CardProfile[]> {
    this._isLoading.set(true);
    this._error.set(false);
    return this.http.get<CardProfile[]>(this.url + `/v1/flash-card/list`).pipe(
      tap((res) => this._cards.set(res)),
      catchError(this.handleError), //tratamento de erro aq
      finalize(() => this._isLoading.set(false))
    );
  }

  save(input: CardProfile): Observable<any> {
    this._isLoading.set(true);
    this._error.set(false);
    return this.http
      .post<CardProfile>(this.url + `/v1/flash-card/save`, input)
      .pipe(
        tap(() => {
          //res
          this._cards.update((current) => {
            if (!current) return [input]; //res.card ao inves de input
            return [...current, input]; //res.card ao inves de input
          });
        }), // o servidor tem que retornar o card feito para funcionar, vou deixar o input temporariamente
        catchError(this.handleError),
        finalize(() => this._isLoading.set(false))
      );
  }
}
