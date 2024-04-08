import ajustes from '../../assets/images/iconos/ajustes_icono.png';
import texto from '../../assets/images/iconos/verificacion-icono.png'
import editar from '../../assets/images/iconos/editar_icono.png'
import info from '../../assets/images/iconos/informacion_icono.png'
import melocotonAzul from '../../assets/images/iconos/melocoton-azul_icono.png'
import melocotonMorado from '../../assets/images/iconos/melocoton-morado_icono.png'

const Help = () => {
  return (
    <div>
      ```html
<section className="textos-legales">
            <h1>Help</h1>
            <p className="text-2xl font-bold">
                Do you have any questions or problems regarding the use of Freakit!?
            </p>
            <p className="fs-5">
                In this section, we will help you solve anything that concerns you about the app.
            </p>
            <p className="text-2xl">Create a profile</p>
            <p>
                To create a profile, the first thing you need to do is register in the app, you can do this in two ways: Through an email and a password or through your Google or Apple account.
                <br/>
                You will need to complete a series of data such as name, email, and password. A confirmation email will be sent where you will have to verify your account through a code that will arrive in your email and you must enter in the app once you have copied it. From this moment, you will start to create your profile where the following data will be requested: name, date of birth, gender, sexual orientation, what are you looking for?, what do you want to appear, and where do you want to appear. All this will serve so that later the match algorithm can show you people compatible with you. These data can be changed in &quot;Settings&quot; <img className="icono-texto" src={ajustes} /> in your profile later. Next begins the personality test. This four-question test based on the 16 personalities will assign you the anime character that has the same personality as you, you can choose between female characters, male characters, or random ones. Continuing with the creation of the profile, you must select at least three likes out of six which also later you can change in the editing part of your profile. Next comes the moment of the photos. You must upload or take at least two photos so you can continue with your profile. It is completely forbidden to upload nude photos, sexual content, violence, or any other that may harm the sensitivity of other users. Finally, you must accept the location (keep in mind that it must be enabled whenever you use the app) and congratulations, your profile is now created. If you wish, you can verify your profile. For this, you must go to the &quot;settings&quot; <img className="icono-texto" src={ajustes} /> part in your profile and access &quot;verify your profile&quot;. You will have to take two photos at that moment with the poses you will see in the example. These photographs will be verified by the Freakit! team and, if it is you, a &quot;verified&quot; icon <img className="icono-texto" src={texto} /> will appear on your profile.
            </p>
            <p className="text-2xl">Modify your profile</p>
            <p>
                In the lower menu, to the right, the profile icon will appear, that&apos;s where you can edit all the information corresponding to your profile. In the &quot;about me&quot; section and clicking the &quot;pencil&quot; icon <img className="icono-texto" src={editar} /> you can edit information such as: job, where you live, studies, birthday, pet, and description. You can also change your likes and your photos (you can also delete two of them). Finally, click save and that&apos;s it!
            </p>
            <p className="text-2xl">Account settings</p>
            <p>
                In your profile, you can also modify other functionalities. You can do this in the &quot;settings&quot; wheel <img className="icono-texto" src={ajustes} /> at the top right within your profile section. In this section, you can change your preferences such as what you want to appear, where you want to appear, distance preferences, or age preferences. You can also change your password, log out, or delete your account. Important! If you delete your account and want to recreate it, you will have no problem creating that account again with the same email. If you delete your profile keep in mind that all data, matches, conversations, etc., will be deleted. Here you will also find links of interest about the application, its use, and the rights and duties of the users.
            </p>
            <p className="text-2xl">Home</p>
            <p>
                The fun begins! In this part, other users&apos; profiles will appear. As you see, the first thing you will find is the anime character that has been assigned to the other person according to the personality test they have taken. The user&apos;s profile consists of the following: Name, age, kilometers away from you, their likes and in the case that they have been verified the pertinent icon will appear. There are four buttons: an “i” <img className="icono-texto" src={info} /> for information where you

 can see what that user&apos;s personality is. Another one appears &quot;view profile&quot; where you will access the person&apos;s profile and can see all their information. Do you like that person? If so, you must click on the &quot;blue peach&quot; <img className="icono-texto" src={melocotonAzul} /> and, if that person likes you... Congratulations, it&apos;s a UwU. You can automatically start a conversation on the same screen or if you prefer to wait, it will appear in your chat room. If you didn&apos;t like that person, click on the &quot;purple peach&quot; <img className="icono-texto" src={melocotonMorado} />. Next, other profiles will appear.
            </p>
            <p className="text-2xl">Chat room</p>
            <p>
                In this room, all the &quot;UwU&quot; you have had will appear. At the top, you can search them by name. When you enter the chat with someone you can talk to that person, send gifs and if you get bored or anything happens, you can always undo the &quot;UwU&quot; or report that person. If you report this person, the Freakit! team will take care of investigating the situation. Also, if you report this person, they will not reappear in your home. If we haven&apos;t cleared your doubts you can send an email to: <a href="mailto:freakitapp@gmail.com" rel="noreferrer" target="_blank">freakitapp@gmail.com</a> We will be happy to help you! 🙂
            </p>
        </section>
```
    </div>
  )
}

export default Help