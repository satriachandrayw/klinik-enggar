To do list

[ ] Guard Global di semua module
``` providers: [
  {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },
],
```

[ ] Encrypt password (with crypto perhaps(?))