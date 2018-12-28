Use Virtual Box to test IE compatibility
=

> Paul, please modify my writing since my knowledge is really dry in this area.

Install virtual box for IE
-

Visit https://www.modern.ie/en-us/virtualization-toolsk and click VirtualBox for Mac, and download  the version of IE you want. 

After you finish downloading, it'll create a image file. When you double click it, it'll automatically be imported into your virtual box collections. 

Network adaptor
-
The current vagrant setup allows us to access guest resources in host environment through virtual network adapter of Virtual Box.

In order to access the host resources (https:://rxweb.rxante.com) inside  the new guest environment (windows), we need to add a second network adaptor to this Virtual Box. 

In VM VirtualBox Manager, click the IE box, and click settings, under Network panel, click Adapter 2, choose "Host-only Adapter" and save. 

Static Ip
-
Now we can start this virtual machine, after we login, it'll notify you get two adapters. Under Control Panel, Network and Internet, View network status and tasks, and on the left sidebar, click change adapter settings, you should see "Local Area Connection 2" and "Local Area Connection 3". We need to assign a static ip to connection 3. 

Double click on the "Local Area Connection 3", and click Properties, click "Internet Protocol Version 4" and now you can assign IP address: 192.168.100.x (x>=3), Subset mask: 255.255.255.0, Default gateway: 192.168.100.1, leave DNS blank. Click OK to save.

Etc/Hosts
-
Since our guest doesn't know what is "https://rxweb.rxante.int", we need to tell windows this server info. 

Click Home -> All Programs -> Accessories -> right click Notepad and select "Run as Administrator". Now you can edit a hidden file "C:\Windows\System32\drivers\etc\hosts", and add the following line


	192.168.100.102 rxante.int rxweb.rxante.int rxauth.rxante.int rxsvcs.rxante.int

Congratulations
-
Once you done with the above steps, you don't need to restart anything, open IE browser and visit https://rxweb.rxante.com, and make sure you click continue if you see a https warning (This warning is not a 404 :). 