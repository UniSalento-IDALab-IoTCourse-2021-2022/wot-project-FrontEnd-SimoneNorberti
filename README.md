# WoT Project: SarcopeniaApp - Front-End in Cloud - Norberti Simone

L’obiettivo del progetto è la realizzazione di un sistema IoT low-cost e low-power che si occupa della raccolta, elaborazione ed analisi dei dati diagnostici di pazienti affetti da una malattia neurodegenerativa, la Sarcopenia, con la successiva visualizzazione delle informazioni estrapolate. Il punto di forza di questo progetto è che tale processo di monitoraggio e diagnostica viene effettuato direttamente da casa, a domicilio, senza che il paziente debba recarsi fisicamente presso una struttura ospedaliera. Inoltre, il medico ha la possibilità di effettuare monitoraggio e diagnostica direttamente nel suo studio da remoto grazie all’ausilio e al supporto del sistema stesso. La creazione di questo sistema è reso possibile grazie all’utilizzo di tecnologie IoT e di tecniche di Intelligenza Artificiale che, automatizzando il processo di monitoraggio e diagnostica, rendendo il tracciamento della malattia più semplice, accurato, senza mancate misurazioni, a basso costo e a basso consumo energetico.

Simulatore sensori: https://github.com/UniSalento-IDALab-IoTCourse-2021-2022/wot-project-raspberry-SimoneNorberti

App Android paziente: https://github.com/UniSalento-IDALab-IoTCourse-2021-2022/wot-project-androidapp-SimoneNorberti

Back-End (Cloud): https://github.com/UniSalento-IDALab-IoTCourse-2021-2022/wot-project-BackEnd-SimoneNorberti

Front-End (Cloud): https://github.com/UniSalento-IDALab-IoTCourse-2021-2022/wot-project-FrontEnd-SimoneNorberti


## Front-End in Cloud
In questo progetto viene utilizzato Oracle Cloud, in particolare una Computing Instance con shape VM.Standard.E2.1.Micro.
Una volta creata la VM, che nel mio caso ha indirizzo 152.70.169.171, modifichiamo la VNIC aggiungengo nella Security List l'accesso alla porta TCP/4200 da qualunque indirizzo esterno (0.0.0.0/0), porta sulla quale verrà esposto il server Front-End.

Durante la fase di creazione dell'istanza, vengono salvate due chiavi sul PC, una privata e una pubblica. Utilizziamo la chiave privata per accedere tramite SSH al server (il default user è ```opc```):
```
chmod 400 ./ssh-key-2023-04-24.key
ssh -i ssh-key-2023-04-24.key opc@152.70.169.171
```

Utilizzare git per scaricare il codice Python sul server:
```
git clone https://github.com/UniSalento-IDALab-IoTCourse-2021-2022/wot-project-FrontEnd-SimoneNorberti
```

Tramite il comando firewall-cmd aprire la porta TCP 4200
```
sudo firewall-cmd --zone=public --add-port=4200/tcp
sudo firewall-cmd --runtime-to-permanent
sudo firewall-cmd –-reload
```

Installare NodeJS e Angular:
```
sudo yum install nodejs
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
nvm install node
sudo npm install -g @angular/cli
sudo npm install
```

Avviare il servizio Front-End:
```
cd wot-project-FrontEnd-SimoneNorberti
ng serve --host 0.0.0.0
```
____________________________________________________________________________________________________________
## SarcopeniaFrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
