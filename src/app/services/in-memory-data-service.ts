import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [
        { id:2, name:'Mr. Nice', description:'Créer une épée Nice...', video:'test1.mp4'},
        { id:3, name:'Narco', description:'Faciliter l\'arrestation des trafiquants de Ricard...', video:'test2.mp4' },
        { id:4, name:'Market Eye', description:'Permettre le repérage de produits mal rangés dans les rayons des magasins', video:'test3.mp4' },
        { id:5, name:'Kid Smile', description:'Redonner le sourire aux enfants grâce à notre jeu de boules !', video:'test4.mp4'},
        { id:6, name:'Liberalis', description:'Libérer la nature du poids des hommes avec nos jetpacks bio !', video:'toystory.mp4' },
        { id:7, name:'Apollo', description:'Lancer une fusée depuis l\ancienne Gaule...', video:'test1.mp4' },
        { id:8, name:'Tiramisu', description:'Réinvinter le tiramisu de demain grâce à une IA ultra développée', video:'test2.mp4' }
    ];
    return {projects};
  }
}