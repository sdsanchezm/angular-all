# RoutingApp

- Commands used: 

    - `ng new RoutingApp`
    - `ng g c pages/home`
    - `ng g c pages/about`
    - `ng g m pages/about --dry-run`
    - `ng g m pages/about/aboutRouting --flat --dry-run`
    - `ng g m pages/home --dry-run`
    - `ng g m pages/home/homeRouting --flat --dry-run`
    - `ng g m appRouting --flat --dry-run`
    - `ng g m pages/allPages --dry-run --flat`


## notes

- Being carefull with importing and exporting modules is crucial, Components are declared
- Double check if modules are being imported twice
- the idea was to create and encapsulta componentes, modules and router in one main module to be imported in the app.module

