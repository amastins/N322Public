import {Injectable} from '@angular/core';
import {AngularFirestoreCollection} from "angularfire2/firestore";
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export interface freeIdeas {
    id?: string;
    img: string;
    desc: string;
}

export interface underIdeas {
    id?: string;
    img: string;
    desc: string;
}

export interface overIdeas {
    id?: string;
    img: string;
    desc: string;
}

export interface proposal {
    id?: string;
    desc: string;
    data: string;
    name: string;
}

@Injectable()
export class DataProvider {

    freeIdeaListRef: AngularFirestoreCollection<freeIdeas>;
    freeIdeaList: Observable<freeIdeas[]>;

    underIdeaListRef: AngularFirestoreCollection<underIdeas>;
    underIdeaList: Observable<underIdeas[]>;

    overIdeaListRef: AngularFirestoreCollection<overIdeas>;
    overIdeaList: Observable<overIdeas[]>;

    proposalListRef: AngularFirestoreCollection<proposal>;
    proposalList: Observable<proposal[]>;

    constructor(private afs: AngularFirestore) {
        console.log('Hello DataProvider Provider');

        this.freeIdeaListRef = this.afs.collection<freeIdeas>('freeIdeas');
        this.freeIdeaList = this.freeIdeaListRef.valueChanges();
        this.freeIdeaList = this.freeIdeaListRef.snapshotChanges().map(actions => {
            return actions.map(action => {
                const data = action.payload.doc.data() as freeIdeas;
                const id = action.payload.doc.id;
                return {id, ...data};
            });
        });

        this.underIdeaListRef = this.afs.collection<underIdeas>('underIdeas');
        this.underIdeaList = this.underIdeaListRef.valueChanges();
        this.underIdeaList = this.underIdeaListRef.snapshotChanges().map(actions => {
            return actions.map(action => {
                const data = action.payload.doc.data() as underIdeas;
                const id = action.payload.doc.id;
                return {id, ...data};
            });
        });

        this.overIdeaListRef = this.afs.collection<overIdeas>('overIdeas');
        this.overIdeaList = this.overIdeaListRef.valueChanges();
        this.overIdeaList = this.overIdeaListRef.snapshotChanges().map(actions => {
            return actions.map(action => {
                const data = action.payload.doc.data() as overIdeas;
                const id = action.payload.doc.id;
                return {id, ...data};
            });
        });

        this.proposalListRef = this.afs.collection<proposal>('proposal');
        this.proposalList = this.proposalListRef.valueChanges();
        this.proposalList = this.proposalListRef.snapshotChanges().map(actions => {
            return actions.map(action => {
                const data = action.payload.doc.data() as proposal;
                const id = action.payload.doc.id;
                return {id, ...data};
            });
        });

    }

    renameFreeIdea(ideaID, newDesc): void {
        this.freeIdeaListRef.doc(ideaID).update({"desc": newDesc});
    }

    renameUnderIdea(ideaID, newDesc): void {
        this.underIdeaListRef.doc(ideaID).update({"desc": newDesc});
    }

    renameOverIdea(ideaID, newDesc): void {
        this.overIdeaListRef.doc(ideaID).update({"desc": newDesc});
    }

    deleteFreeIdea(ideaID):void {
        this.freeIdeaListRef.doc(ideaID).delete();
    }

    deleteUnderIdea(ideaID):void {
        this.underIdeaListRef.doc(ideaID).delete();
    }

    deleteOverIdea(ideaID):void {
        this.overIdeaListRef.doc(ideaID).delete();
    }

    addProposal(proposalInfo): void {
        if (proposalInfo) {
            this.proposalListRef.add(proposalInfo)
        }
    }

    // editttProposal(proposalID, newDesc, newDate, newTitle): void {
    //     this.proposalListRef.doc(proposalID).update({"descrip": newDesc, "date": newDate, "name": newTitle});
    // }

    // deleteProposal(proposalID): void {
    //     this.proposalListRef.doc(proposalID).delete();
    // }

}
