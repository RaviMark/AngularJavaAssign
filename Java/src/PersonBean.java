
public class PersonBean {
	private String firstName;
	private String lastName;
	private String email;
	private String age;
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public boolean equals(PersonBean pb) {
		if (pb == this)
            return true;
		if(pb.getFirstName()!=null && this.getFirstName().compareTo(pb.getFirstName()) != 0)
			return false;
		if(pb.getLastName()!=null && this.getLastName().compareTo(pb.getLastName()) != 0)
			return false;
		if(pb.getEmail()!=null && this.getEmail().compareTo(pb.getEmail()) != 0)
			return false;
		if(pb.getAge()!=null && this.getAge().compareTo(pb.getAge()) != 0)
			return false;
		return true;		
	}
}
