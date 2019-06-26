#include <stdio.h> 
#include <string.h> 
#include<iostream>
using namespace std;
  

char check(int num) 
{ 
    if (num >= 0 && num <= 9) 
        return (char)(num + '0'); 
    else
        return (char)(num - 10 + 'A'); 
}

int val(char c) 
{ 
    if (c >= '0' && c <= '9') 
        return (int)c - '0'; 
    else
        return (int)c - 'A' + 10; 
} 
  
 
int toDeci(char *str, int sbase) 
{ 
    int length = strlen(str); 
    int power = 1; 
    int num = 0;  
    int i; 
  	
    
    for (i = length - 1; i >= 0; i--) 
    { 
        
        if (val(str[i]) >= sbase) 
        { 
             cout<<"Input invalid";
	    	return 0;
            
        } 
  
        num += val(str[i]) * power; 
        power = power * sbase; 
    } 
  
    return num; 
} 
 
 
 
 
 
/*void strev(char *str) 
{ 
    int len = strlen(str); 
    int i; 
    for (i = 0; i < len/2; i++) 
    { 
        char temp = str[i]; 
        str[i] = str[len-i-1]; 
        str[len-i-1] = temp; 
    } 
   
}*/ 


 char * convertod(char str[], int dbase, int deci) 
{ 
    int num = 0;  
  
   
    while (deci > 0) 
    { 
        str[num++] = check(deci % dbase); 
        deci=deci/ dbase; 
    } 

    //strev(str); 
    return str; 
} 
 
 
 
 
  

int main() 
{ 
    char str[10];
    int dbase,sbase,num,i;
 	char sourceString[]={'0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
    
 l1:   cout<<"\nenter source base:";
    cin>>sbase;
    
    if(sbase>32)
    {
    	cout<<"enter again:";
    	goto l1;
	}
    
l2:  cout<<"enter string:";
	cin>>str;
	
	printf("Decimal equivalent of %s in base %d is "
           " %d\n", str,sbase, toDeci(str, sbase)); 
	
	
    cout<<"\nenter dbase";
    cin>>dbase; 
    
    cout<<"string generated is :"<<"\n";
	for(i=0;i<sbase;i++)
	{
		cout<<sourceString[i]<<"\t";
	}
    
    
    
    
    
        
    int deci=toDeci(str, sbase);
    
    printf("\nDestination equivalent of %d in base %d is"
		"%s\n",deci,dbase,convertod(str, dbase,deci));
    return 0; 
}